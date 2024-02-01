import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_T_M_D_ZEITENAttributes {
    DT_BIS?: Date;
    L_DAUERSEKUNDEN?: number;
    DTINSERT?: Date;
    LUSERID?: number;
    REF_BUCHUNGSART?: string;
    STR_GUIDABWESENHEITSANTRAG?: string;
    FKSTRID?: string;
    DT_DAUER?: Date;
    STR_DAUER?: string;
    REF_KOSTENSTELLE?: string;
    DT_PAUSE?: Date;
    STR_PAUSEMINUTEN?: string;
    STRID: string;
    DTEDIT?: Date;
    DT_VON?: Date;
    LUSERIDINSERT?: number;
    B_STANDARDEINTRAG?: boolean;
    L_PAUSESEKUNDEN?: number;
}

@Table({
	tableName: "ZE_T_M_D_ZEITEN",
	timestamps: false 
})
export class ZE_T_M_D_ZEITEN extends Model<ZE_T_M_D_ZEITENAttributes, ZE_T_M_D_ZEITENAttributes> implements ZE_T_M_D_ZEITENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_BIS?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_DAUERSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BUCHUNGSART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_GUIDABWESENHEITSANTRAG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DAUER?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_DAUER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_KOSTENSTELLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_PAUSE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PAUSEMINUTEN?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_VON?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STANDARDEINTRAG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_PAUSESEKUNDEN?: number;

}