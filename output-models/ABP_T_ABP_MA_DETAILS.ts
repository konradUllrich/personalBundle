import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABP_T_ABP_MA_DETAILSAttributes {
    REF_STV2?: number;
    FKSTRID?: string;
    TXT_BEMERKUNGEN?: string;
    REF_KATEGORIE?: string;
    DT_VON?: Date;
    STR_STELLVERTRETUNG2?: string;
    LUSERIDINSERT?: number;
    STR_STELLVERTRETUNG?: string;
    L_ANZAHLTAGE?: number;
    REF_STV?: number;
    B_KEINESTELLVERTRETUNG?: boolean;
    DT_BIS2?: Date;
    REF_PERSONAL?: string;
    LUSERID?: number;
    L_IDSTELLVERTRETUNG2?: number;
    STR_BEGRUENDUNGKEINESTELLVERTR?: string;
    B_STELLVERTRETUNGWIRDUEBERNOMM?: boolean;
    STRID: string;
    DTEDIT?: Date;
    DT_BIS?: Date;
    DTINSERT?: Date;
}

@Table({
	tableName: "ABP_T_ABP_MA_DETAILS",
	timestamps: false 
})
export class ABP_T_ABP_MA_DETAILS extends Model<ABP_T_ABP_MA_DETAILSAttributes, ABP_T_ABP_MA_DETAILSAttributes> implements ABP_T_ABP_MA_DETAILSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_STV2?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEMERKUNGEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_KATEGORIE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_VON?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STELLVERTRETUNG2?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STELLVERTRETUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_STV?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_KEINESTELLVERTRETUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_BIS2?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PERSONAL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_IDSTELLVERTRETUNG2?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BEGRUENDUNGKEINESTELLVERTR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STELLVERTRETUNGWIRDUEBERNOMM?: boolean;

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
    	DT_BIS?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}