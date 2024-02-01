import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BENV_T_U_APPSAttributes {
    LUSERID?: number;
    DTEDIT?: Date;
    STR_GUID?: string;
    DTINSERT?: Date;
    STR_NAME?: string;
    LUSERIDINSERT?: number;
    FKLID?: number;
    STRID: string;
}

@Table({
	tableName: "BENV_T_U_APPS",
	timestamps: false 
})
export class BENV_T_U_APPS extends Model<BENV_T_U_APPSAttributes, BENV_T_U_APPSAttributes> implements BENV_T_U_APPSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}