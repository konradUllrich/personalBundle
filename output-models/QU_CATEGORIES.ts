import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface QU_CATEGORIESAttributes {
    LUSERID?: number;
    DTEDIT?: Date;
    STRID: string;
    LUSERIDINSERT?: number;
    STR_TITEL?: string;
    DTINSERT?: Date;
}

@Table({
	tableName: "QU_CATEGORIES",
	timestamps: false 
})
export class QU_CATEGORIES extends Model<QU_CATEGORIESAttributes, QU_CATEGORIESAttributes> implements QU_CATEGORIESAttributes {

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
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}