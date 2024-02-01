import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BIXV_T_JOURNALAttributes {
    L_ANZAHLANTRAEGE?: number;
    STRID: string;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    DTEDIT?: Date;
}

@Table({
	tableName: "BIXV_T_JOURNAL",
	timestamps: false 
})
export class BIXV_T_JOURNAL extends Model<BIXV_T_JOURNALAttributes, BIXV_T_JOURNALAttributes> implements BIXV_T_JOURNALAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLANTRAEGE?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}