import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface QU_QUESTIONS_FILESAttributes {
    STRID: string;
    LUSERIDINSERT?: number;
    STRMETA?: string;
    STRFILENAME?: string;
    DTLASTMODIFY?: Date;
    FKSTRID?: string;
    LORDER?: number;
    DTEDIT?: Date;
    STRCONTENTTYPE?: string;
    STRURL?: string;
    DTINSERT?: Date;
    LUSERID?: number;
}

@Table({
	tableName: "QU_QUESTIONS_FILES",
	timestamps: false 
})
export class QU_QUESTIONS_FILES extends Model<QU_QUESTIONS_FILESAttributes, QU_QUESTIONS_FILESAttributes> implements QU_QUESTIONS_FILESAttributes {

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
    	type: DataType.STRING(2048) 
    })
    	STRMETA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFILENAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTLASTMODIFY?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LORDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTENTTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRURL?: string;

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

}