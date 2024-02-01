import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_T_TERMINEAttributes {
    L_BESTAETIGUNGERFOLGTDURCH?: number;
    LUSERIDINSERT?: number;
    DT_BESTAETIGUNGERFOLGTAM?: Date;
    DT_VON?: Date;
    REF_VERANSTALTUNGSART?: string;
    LUSERID?: number;
    STRID: string;
    STR_BESTUHLUNG?: string;
    TYPE?: string;
    REF_14F5B578?: string;
    TXT_BEMERKUNGEN?: string;
    DT_BIS?: Date;
    DTEDIT?: Date;
    REF_RESSOURCE?: string;
    DTINSERT?: Date;
    STR_BETREFF?: string;
    TXT_BEGRUENDUNG?: string;
    TXT_EXPORTLINK?: string;
    REF_C2688517?: string;
    B_AKTUELLERTERMIN?: boolean;
    REF_RESERVIERER?: number;
}

@Table({
	tableName: "CAL_T_TERMINE",
	timestamps: false 
})
export class CAL_T_TERMINE extends Model<CAL_T_TERMINEAttributes, CAL_T_TERMINEAttributes> implements CAL_T_TERMINEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_BESTAETIGUNGERFOLGTDURCH?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_BESTAETIGUNGERFOLGTAM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_VON?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_VERANSTALTUNGSART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BESTUHLUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	TYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_14F5B578?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEMERKUNGEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_BIS?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_RESSOURCE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BETREFF?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEGRUENDUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_EXPORTLINK?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_C2688517?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_AKTUELLERTERMIN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_RESERVIERER?: number;

}