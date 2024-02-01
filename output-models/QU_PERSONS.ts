import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface QU_PERSONSAttributes {
    LUSERID?: number;
    B_INVITED?: boolean;
    LUSERIDINSERT?: number;
    REF_832BB543?: number;
    STR_NOTIFICATION?: string;
    B_NO_NOTIFICATION?: boolean;
    DTEDIT?: Date;
    DTINSERT?: Date;
    STRID: string;
    FKSTRID?: string;
}

@Table({
	tableName: "QU_PERSONS",
	timestamps: false 
})
export class QU_PERSONS extends Model<QU_PERSONSAttributes, QU_PERSONSAttributes> implements QU_PERSONSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_INVITED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_832BB543?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NOTIFICATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_NO_NOTIFICATION?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

}