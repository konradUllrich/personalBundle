import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCPRTINSTANCEAttributes {
    GUIDPORTLET: string;
    GUIDPORTLETCLASS: string;
    GUIDAPP?: string;
    GUIDPAGE?: string;
    STRCONSTANTTITLE?: string;
}

@Table({
	tableName: "LCPRTINSTANCE",
	timestamps: false 
})
export class LCPRTINSTANCE extends Model<LCPRTINSTANCEAttributes, LCPRTINSTANCEAttributes> implements LCPRTINSTANCEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDPORTLET!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	GUIDPORTLETCLASS!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	GUIDAPP?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	GUIDPAGE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONSTANTTITLE?: string;

}